import Indeterminate from '@/app/loading'
import { ProgressBar } from 'primereact/progressbar'

export default function Loading() {
  return (
    <ProgressBar mode="indeterminate" style={{ height: '25px' }}></ProgressBar>
  )
}
