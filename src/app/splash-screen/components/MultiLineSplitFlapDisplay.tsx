import { ReactNode, useEffect, useMemo, useState } from "react";
import { FlapDisplay, Presets } from "react-split-flap-effect";
import centerText from "../centerText";
import React from "react";

export interface MultiLineSplitFlapDisplayProps {
  srcLineValues: string[];
  displayWidthChars: number;

  flapSwitchTimeMs?: number;
  showHinge?: boolean;
  textSize?: string;
}

const MultiLineSplitFlapDisplay = ({
  srcLineValues,
  displayWidthChars,
  flapSwitchTimeMs = 50,
  showHinge = true,
  textSize = "text-7xl",
}: MultiLineSplitFlapDisplayProps) => {
  const centeredLineValues = useMemo(() => {
    return srcLineValues.map((line) => centerText(line, displayWidthChars));
  }, srcLineValues);

  const [linesDisplayed, setLinesDisplayes] = useState<string[]>(
    new Array(srcLineValues.length).fill("")
  );

  useEffect(() => {
    setLinesDisplayes(centeredLineValues);
  }, []);

  return (
    <div className="flex flex-col text-7xl p-0">
      {linesDisplayed.map((line, idx) => {
        return (
          <FlapDisplay
            key={idx}
            className={`p-0 [&_[data-kind="digit"]]:font-['mono'] [&_[data-kind="digit"]]:leading-tight ${textSize}`}
            value={line}
            hinge={showHinge}
            chars={Presets.ALPHANUM + "!@#$%^&*()'"}
            timing={flapSwitchTimeMs}
            length={displayWidthChars}
            render={(r) => {
              return (
                <div className={"flex flex-row flex-shrink-0" + r.className}>
                  {React.Children.map(r.children, (child) => {
                    return <div className="p-1 bg-slate-400">{child}</div>;
                  })}
                </div>
              );
            }}
          />
        );
      })}
    </div>
  );
};

export default MultiLineSplitFlapDisplay;
