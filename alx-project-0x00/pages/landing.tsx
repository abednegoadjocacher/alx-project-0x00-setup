import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Button title="Explore Now" />
      <Button title="Learn More" />
      <Button title="Get Started" />
      <Button title="Contact Us" />
      <Button title="Sign Up" />
      <Button title="Subscribe" />
      <Button title="Join Now" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
export default Landing