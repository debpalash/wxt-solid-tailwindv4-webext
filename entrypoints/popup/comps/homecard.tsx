import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../src/components/ui/card";

function Homecard() {
  return (
    <>
      <Card class="text-center">
        <CardHeader>
          <CardTitle class="text-4xl">Logo</CardTitle>
          <CardDescription>here goes nothing..</CardDescription>
        </CardHeader>
        <CardContent class="flex flex-col text-left gap-5">
          <p class="text-2xl">Tech Used on this Demo</p>
          <div class=" flex flex-col text-left gap-1 text-lg">
            <a href="">- WXT</a>
            <a href="">- SolidJS</a>
            <a href="">- TypeScript</a>
            <a href="">- Tailwind v4 - LightningCSS</a>
            <a href="">- Shadcn-solid</a>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
export default Homecard;
