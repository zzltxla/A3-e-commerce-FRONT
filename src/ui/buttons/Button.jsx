export const Button = ({ variant, children = React.ReactNode }) => {
    let buttonClass = "";
    switch (variant) {
        case 'black':
            buttonClass = "button-primary";
            break;
        case 'white':
            buttonClass = "button-secondary";
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
