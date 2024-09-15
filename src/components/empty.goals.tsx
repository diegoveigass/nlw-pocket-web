import logoInOrbitImg from '../assets/logo-in-orbit.svg'
import letsStartIllustrationImg from '../assets/lets-start-illustration.svg'
import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

export function EmptyGoals() {
  return (
    <div className="h-screen flex items-center flex-col justify-center gap-8">
      <img src={logoInOrbitImg} alt="In.orbit" />

      <img src={letsStartIllustrationImg} alt="" />

      <div className="max-w-80 text-center flex flex-col items-center gap-5">
        <span className="text-zinc-300 leading-relaxed">
          Você ainda não cadastrou nenhuma meta, que tal{' '}
          <a href="/create" className="underline">
            cadastrar um
          </a>{' '}
          agora mesmo?
        </span>

        <DialogTrigger asChild>
          <Button>
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>
    </div>
  )
}
