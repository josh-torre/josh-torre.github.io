import {NavBar} from "@/app/Core Components/Navigation Bar";

type CardInput = {
    title: string;
    showTitleCard?: boolean;
}

export default function TitleCard(input: CardInput): JSX.Element {
    return (
        <div className="w-full flex flex-col sm:flex-row m-auto justify-between">
            <div>
                <p className="text-7xl font-black pb-2">{input.title}</p>
            </div>
            <div className="w-auto">
                {input.showTitleCard || input.showTitleCard === undefined ? NavBar : <></>}
            </div>
        </div>
    );
}