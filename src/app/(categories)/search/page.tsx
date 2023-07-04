import Movies from './components/Movies';

export default function page() {
  return (
    <section className="w-full min-h-screen bg-[#171a25] sm:p-16 py-14">
        <main className='max-w-[1920px] flex flex-col'>
            <Movies />
        </main>
    </section>
  )
}
