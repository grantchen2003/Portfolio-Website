import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SkillItem from "./SkillItem";
import { v4 as uuidv4 } from "uuid";
import useScreenSize from "../../../hooks/useScreenSize";
import AnimateOnScroll from "../../shared/AnimateOnScroll";

// icons obtained from https://devicon.dev/
export const allSkills = {
  languages: {
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    Go: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
    "C++":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    Bash: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
  },
  frameworks: {
    "Express.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    Django:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    Gin: "https://raw.githubusercontent.com/gin-gonic/logo/master/color.svg",
    Symfony:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
    "React.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    Redux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    jQuery:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    "Material UI":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    Sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
  },
  technologies: {
    AWS: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    GCP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    Azure: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    PostgreSQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    MongoDB:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    Docker:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    gRPC: "https://grpc.io/img/logos/grpc-icon-color.png",
    Nginx:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    Linux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
};

export const getImgSrcOfTechnology = (technology) => {
  let imgSrc;
  Object.values(allSkills).forEach((techGroup) => {
    imgSrc ??= techGroup[technology];
  });
  return imgSrc;
};

const Skills = () => {
  const { desktop, tablet, phone } = useScreenSize();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={3}
      py={7}
      id="skills"
    >
      <Typography variant="h1">skills</Typography>
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="center"
        mt={desktop ? 4 : 3}
      >
        {Object.entries(allSkills).map((technologyGroup) => {
          const [technologyGroupName, technologyGroupList] = technologyGroup;
          return (
            <Box
              display="flex"
              flexDirection={desktop ? "row" : "column"}
              alignItems="center"
              my={3}
              gap={desktop && "50px"}
              key={uuidv4()}
            >
              <Box
                display="flex"
                justifyContent={desktop ? "right" : "center"}
                alignItems="right"
                width={desktop && "200px"}
              >
                <Typography
                  color="secondary.main"
                  variant="h4"
                  mb={(tablet || phone) && "30px"}
                >
                  {technologyGroupName}
                </Typography>
              </Box>

              <AnimateOnScroll animation="fade-left">
                <Box
                  display="flex"
                  flexDirection="row"
                  flexWrap="wrap"
                  justifyContent={desktop ? "left" : "center"}
                >
                  {Object.entries(technologyGroupList).map((technology) => {
                    const [technologyName, technologyImgSrc] = technology;
                    return (
                      <SkillItem
                        key={uuidv4()}
                        name={technologyName}
                        src={technologyImgSrc}
                      />
                    );
                  })}
                </Box>
              </AnimateOnScroll>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Skills;
