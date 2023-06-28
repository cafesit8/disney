import { useStore } from "@/app/store/zustand"

interface PropsParams {
  params: {
    movie: string
  }
}

function useMovieDetails() {
  const { movieDetails } = useStore()
}

export default function Page({params}: PropsParams) {
  const { movie } = params
  const { movieDetails } = useStore()
  console.log(movieDetails)
  return (
    <div>

    </div>
  )
}
