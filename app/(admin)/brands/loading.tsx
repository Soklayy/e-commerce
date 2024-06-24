import { ProgressBar } from "primereact/progressbar";

export default function loading() {
    return (
        <ProgressBar mode="indeterminate" style={{ height: '25px' }}></ProgressBar>
    )
}
