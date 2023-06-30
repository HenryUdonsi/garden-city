import { StyledCard } from './styles/Card.styled'

export default function Card({ item: { title, image } }) {
  return (
    <StyledCard>
        <img src={image} alt='an image' height="120px"/>
        <p>{title}</p>
    </StyledCard>
  )
}