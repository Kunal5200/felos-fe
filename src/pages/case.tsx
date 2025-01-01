import caseBanner from "@/banner/case-banner.jpeg";
import Banner from "@/components/banner";
import ProjectCard from "@/components/projects/projectCard";
import { PROJECTDATA } from "@/utils/projectData";
import { Container, Grid2 } from "@mui/material";
const Case = () => {
  return (
    <div>
      <Banner img={caseBanner.src} heading="Case" />
      <Container maxWidth="lg">
        <Grid2 container sx={{ pt: 10, pb: 10 }} spacing={4}>
          {PROJECTDATA.map((val, i) => (
            <Grid2 size={{ lg: 3, xs: 12 }} key={i}>
              <ProjectCard
                img={val.img}
                title={val.title}
                content={val.content}
                heading={val.heading}
              />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
};

export default Case;
