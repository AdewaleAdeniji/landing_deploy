import { useRouter } from "next/dist/client/router";

const FloatingButton = (props) => {
    const history = useRouter();
    const support = () => {
        history.push('/support');
    }
    return (
        <button className="ask" onClick={support}>
            <img src="/images/headset.svg" alt="Support"/> {props.text?props.text:'Ask a question'}
        </button>
    )
}
export default FloatingButton;