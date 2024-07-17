import Default from "@/templates/Default"
import { Container } from "@mui/material"


const Home = () => {
  return (
    <main>
      <Default>
        <Container maxWidth="sm">
          <a href="/user">dash</a>
        </Container>
      </Default>
    </main>
  )
}

export default Home