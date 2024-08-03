type CardData = {
    title: string;
    subHeading: string;
    bodyText: string;
    optionalJSX: JSX.Element | undefined;
};

export function MakeCard({title, subHeading, bodyText, optionalJSX}: CardData) : JSX.Element {
    const sideContentSize: string = optionalJSX == undefined ? "" : "w-[50%]";
    optionalJSX = optionalJSX == undefined ? <></> : optionalJSX;
    return (
        <div className="p-3">
            <div
                className="w-full h-fit bg-black bg-opacity-30 rounded-2xl sm:flex sm:flex-col-2">
                <div className="p-6">
                    <p className="font-bold text-my-white text-2xl pb-2">{title}</p>
                    <p className='text-xl font-bold text-my-teal pb-2'>{subHeading}</p>
                    <p className="text-l text-my-white">{bodyText}</p>
                </div>
                <div className={"p-6 flex-col-1 m-auto " + sideContentSize}>
                    {optionalJSX}
                </div>

            </div>
        </div>
    );
}