export const Button = ({ props }) => {
    let buttonClass = "";
    switch (props.variant) {
      case 'primary':
        buttonClass = "primary button";
        break;
      case 'secondary':
        buttonClass = "secondary button";
        break;
    }
  
    return (
      <>
        <button className={buttonClass}>
          {children}
        </button>
      </>
    )
  }
