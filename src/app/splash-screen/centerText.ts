/**
 * Returns a new string with the given source string in the "center" of the new string of the given length
 * @param src The source string that needs to be centered
 * @param length The length of the final string
 * @param justifyOnImperfectCenter If the source string must be off the perfect center, which way should the text 'lean' towards
 * @param padChar The char that is used to pad the string so it is centered in the result
 */
const centerText = (
  src: string,
  length: number,
  justifyOnImperfectCenter: "left" | "right" = "left",
  padChar: string[number] = " "
) => {
  if (src.length > length) {
    throw new Error(
      "centerText: You must provide a length larger than or equal to the source string's length"
    );
  }
  const paddingCharsNeeded = length - src.length;

  const leftPad =
    justifyOnImperfectCenter === "left"
      ? Math.floor(paddingCharsNeeded / 2)
      : Math.ceil(paddingCharsNeeded / 2);
  //rightPad should depend on leftPad so we dont accidentally misscount
  const rightPad = paddingCharsNeeded - leftPad;

  return padChar.repeat(leftPad) + src + padChar.repeat(rightPad);
};

export default centerText;
