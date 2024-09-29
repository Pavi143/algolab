"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Signin from "@/components/signin";
import { Button, Box, Tabs, Tab } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import img1 from "@/assets/img1.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Markdown from "markdown-to-jsx";
import Example from "./example.mdx";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { SyntheticEvent } from 'react';


interface Post {
  id: number;
  title: string;
  content: string;
  creation_date: string;
  tags: string[];
}

export default function Home() {
  // const [value, setValue] = useState(0);
  // const [currentUserId, setCurrentUserId] = useState(1);
  const [postData, setPostData] = useState<Post[]>([]);
  const [programmingLangugage, setProgrammingLanguage] = useState("all");
  const [topic, setTopic] = useState("all");
  const [name, setName] = useState("");
  const [initialDisplay, setInitialDisplay] = useState("all");
  const [answered, setAnswered] = useState('all');

  
  

  const handleChangeSelectLanguage = (event: SelectChangeEvent) => {
    setProgrammingLanguage(event.target.value as string);
  };
  const handleChangeSelect = (event: React.SyntheticEvent<Element, Event>, value: any) => {
    const target = event.currentTarget as HTMLSelectElement;
    setInitialDisplay(target.value);
  };
  const handleChangeSelectTopic = (event: SelectChangeEvent) => {
    setTopic(event.target.value as string);
  };

  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setPostData(data[1]);
      console.log(data[1]);
      console.log(postData);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4  w-full">
      <div className="flex justify-between items-center w-full px-8">
        <p className="text-4xl font-semibold">ALGOLAB</p>
        <Signin />
      </div>

      <div className="flex justify-center px-8 ml-36 w-full ">
        <div className="flex flex-col items-center w-1/2 gap-4 ">
          <div className="w-full py-4">
            <div className="flex justify-between items-center p-2">
              <p className="text-4xl font-bold">All Questions</p>
              <Button className="font-bold py-2 px-4 rounded" variant="contained">
                + Ask a Question
              </Button>
            </div>
          </div>

          <div className="w-full py-4">
            <div className="flex justify-evenly">
              <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                <Tabs value={initialDisplay} onChange={handleChangeSelect} variant="fullWidth">
                  <Tab label="All" value="All" icon={<MarkUnreadChatAltIcon />} />
                  <Tab label="Following"value="Following" icon={<FavoriteIcon />} />
                 
                </Tabs>
              </Box>
            </div>
          </div>

          <div className="w-full">
            <Box sx={{ width: '100%', maxWidth: '100%' }}>
              <TextField
                id="input-with-sx"
                label="Search"
                variant="outlined"
                type="search"
                fullWidth
                value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value);
                }}
              />
            </Box>
          </div>

          <div className="w-full py-4">
            <div className="flex justify-evenly gap-8">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Programming Language</InputLabel>
                <Select
                  
                  id="selectProgramingLanguage"
                  value={programmingLangugage}
                  label="Programming Language"
                  onChange={handleChangeSelectLanguage}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="C">C</MenuItem>
                  <MenuItem value="C++">C++</MenuItem>
                  <MenuItem value="JavaScript">JavaScript</MenuItem>
                  <MenuItem value="Python">Python</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="selectTopic">Topic</InputLabel>
                <Select
                  
                  id="selectTopic"
                  value={topic}
                  label="Topic"
                  onChange={handleChangeSelectTopic}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Web development">Web development</MenuItem>
                  <MenuItem value="Database">Database</MenuItem>
                  <MenuItem value="Operating System">Operating System</MenuItem>
                  <MenuItem value="Data science">Data Science</MenuItem>
                </Select>
              </FormControl>
              <FormGroup>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Answered"
                />
              </FormGroup>
            </div>
          </div>

          <div className="w-full py-4">
            {postData.map((post, i) => (
              <div
                className="flex flex-col gap-4 border-solid border-1 border-black m-8"
                key={i}
              >
                <div className="flex justify-between">
                  <div className="flex m-2">
                    <Image
                      src={img1}
                      className="w-16 h-16 rounded-full"
                      alt="Profile"
                    />
                    <p className="text-xl m-4">Irma Watson</p>
                  </div>
                  <div className="flex m-2">
                    <p className="text-xl m-4">{post.creation_date}</p>
                  </div>
                </div>

                <div className="flex p-2">
                  <Markdown>{post.content}</Markdown>
                </div>

                <div className="flex flex-col bg-zinc-50 p-24 dark:bg-zinc-950 m-4">
                  <Example />
                </div>

                <div className="flex gap-4 m-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Button className="inherit text-xl" key={tagIndex}>
                      {tag}
                    </Button>
                  ))}
                </div>
                <div className="flex justify-between m-4">
                  <div className="flex gap-8">
                    <p className="flex gap-2">
                      <ThumbUpAltOutlinedIcon /> 200
                    </p>
                    <p className="flex gap-2">
                      <CommentOutlinedIcon /> 40
                    </p>
                  </div>
                  <p className="flex gap-2">
                    <RemoveRedEyeOutlinedIcon /> 300
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/4"></div>
      </div>
    </div>
  );
}
