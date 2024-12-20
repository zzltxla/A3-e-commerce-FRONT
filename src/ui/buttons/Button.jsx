import { NavLink } from "react-router-dom";


export const Button = ({ variant, children = React.ReactNode, href }) => {
    let buttonClass = "";
    switch (variant) {
        case 'black':
            buttonClass = "button primary";
            break;
        case 'white':
            buttonClass = "button secondary";
            break;
    }


    return (
      <>
      {
        href ? 
          <NavLink to={href} className={buttonClass}>{children}</NavLink> 
        : 
          <button className={buttonClass} >
            {children}
          </button>
      }
        
      </>
    )
}
