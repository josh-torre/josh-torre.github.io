import MultiLineSplitFlapDisplay from "./components/MultiLineSplitFlapDisplay";

const SplashScreen = () => {
  return (
    <div className="w-screen h-screen flex justify-center flex-col items-center bg-neutral-900 ">
      <MultiLineSplitFlapDisplay
        srcLineValues={["Welcome to", "Josh's Website"]}
        displayWidthChars={20}
        showHinge={true}
      />
    </div>
  );
};

export default SplashScreen;
