export const SectionHeaders = ({ main, subHeading, style, subCss, mainCss }) => {
  return (
    <>
      <div className={`mt-[100px] ${style}`}>
        <h2 className={subCss}>{subHeading}</h2>
        <h1 className={mainCss}>{main}</h1>
      </div>
    </>
  );
};
