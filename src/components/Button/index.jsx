import PropTypes from "prop-types"

import { MyButton } from "./styles"

function DefaultButton({ children,theme, ...props }) {


    return (
        <MyButton {...props} theme={theme}>
            {children}

        </MyButton>
    )
}

DefaultButton.propTypes = { 

    children: PropTypes.node.isRequired,
}
export default DefaultButton