import './App.css'
import TwitterFollowCard from './TwitterFollowCard'
export default function App() {
    return (
        <>
            <TwitterFollowCard userName='ricardoArjona'>Ricado Arjona</TwitterFollowCard>
            <TwitterFollowCard userName='midudev' name='Pablo Hernadez'></TwitterFollowCard>
            <TwitterFollowCard userName='elonmisk' name='Elon Musk'></TwitterFollowCard>
            <TwitterFollowCard userName='vxnder' name='van no qe se'></TwitterFollowCard>
        </>
    )
}