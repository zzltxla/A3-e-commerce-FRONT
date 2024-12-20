import 'ldrs/ring'
import { hourglass } from 'ldrs'



export const Loader = () => {
    hourglass.register()
    return (
        <div className='loader'>
            <l-hourglass
                size="40"
                bg-opacity="0.1"
                speed="1.75"
                color="black"
            ></l-hourglass>
        </div>
    )
}