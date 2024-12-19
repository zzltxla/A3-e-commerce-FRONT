export const Button = ({ variant, children = React.ReactNode }) => {
    let buttonClass = "";
    switch (variant) {
        case 'primary':
            buttonClass = "primary button";
            break;
        case 'secondary':
            buttonClass = "secondary button";
            break;
    }


    return (
      <>
        <button className={buttonClass} >
          {children}
        </button>
      </>
    )
}
