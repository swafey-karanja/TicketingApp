import { getRoomData } from "@/libs/apis";
import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2024-06-20",
});

type RequestData = {
    checkInDate: string;
    checkOutDate: string;
    adults:  number;
    children: number;
    numberOfDays: number;
    hotelRoomSlug: string;
};

export async function POST (req: Request, res: Response) {
    const {
        checkInDate, 
        checkOutDate, 
        adults, 
        children, 
        numberOfDays, 
        hotelRoomSlug
    }: RequestData = await req.json();

    if (!checkInDate || !checkOutDate || !adults || !numberOfDays || !hotelRoomSlug) {
        return new NextResponse("All fields are required!", {status: 400})
    }

    const origin = req.headers.get('origin');

    const session = await getServerSession(authOptions);

    if (!session) {
        return new NextResponse("Authentication required", {status: 400})
    };

    const userId = session.user.id;
    const formattedCheckinDate = checkInDate.split('T')[0];
    const formattedCheckoutDate = checkOutDate.split('T')[0];

    try {
        const room = await getRoomData(hotelRoomSlug);
        const discountPrice = room.price - (room.price / 100) * room.discount;
        const totalPrice = discountPrice * numberOfDays;

        //create stripe payment

        const stripeSession = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: room.name,
                            images: room.images.map(image => image.url),
                        },
                        unit_amount: parseInt((discountPrice * 100).toString()),
                    },
                },
            ],
            payment_method_types: ['card'],
            success_url: `${origin}/users/${userId}`,
        });

        return NextResponse.json(stripeSession, {
            status: 200,
            statusText: 'Payment session created',
        });

    } catch (error: any) {
        console.log("Payment failed", error);
        return new NextResponse(error, {status: 500});
    }
};