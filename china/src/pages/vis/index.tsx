import VisibilityChange from '@ice/appear';

export default function Home() {
  return (
    <VisibilityChange
      onDisappear={() => {
        console.log('onDisappear')
      }}
    >
      <span>show something</span>
    </VisibilityChange>
  )
}