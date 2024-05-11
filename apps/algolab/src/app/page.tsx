"use client"
import Image from "next/image";
import Signin from "@/components/signin";
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import img1 from '@/assets/img1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  
  return (
    <div className="flex justify-center p-8">
      <div className="w-1/4">
        <Signin />
      </div>

      <div className="flex flex-col w-1/2 gap-4">
        <div>
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            className="text-white font-bold py-2 px-8 rounded"
          >
            Search
          </Button>
        </div>
        <div className="w-full py-4">
          <div className="flex justify-between items-center p-2 w-full">
            <p className="text-2xl font-bold">All Questions</p>
            <Button className="text-white font-bold py-2 px-4 rounded">+ Ask a Question</Button>
          </div>
        </div>

       
        <div className="w-full py-4">
          <div className="flex justify-evenly">
          <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} variant="fullWidth">
              <Tab label="Following" icon={<FavoriteIcon/>} />
              <Tab label="Unanswered" icon={ <MarkUnreadChatAltIcon/>} />
              <Tab label="Relevant" icon={< StarBorderRoundedIcon/>} />
              <Tab label="Popular" icon={< TrendingUpOutlinedIcon/>} />
            </Tabs>
          </Box>
          </div>
        </div>

        <div className="w-full py-4">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between ">
              <div className="flex m-2">
                <img src={img1.src} className="w-16 h-16 rounded-full" alt="Profile" />
                <p className="text-xl m-4">Irma Watson</p>
              </div>
              <div className="flex m-2">
                <p className="text-xl m-4 ">7 Dec, 2:25 PM</p>
              </div>
            </div>
            <p className="text-2xl ">How do I return the response/result from a function foo that makes an asynchronous request?</p>
            <div className="flex flex-col border-solid border-1 border-white">
              

            </div>
            <div className="flex gap-4">
              <Button className="inherit">Javascript</Button>
              <Button className="inherit">Asynchronous</Button>
              < Button className="inherit">Java</Button>
            </div>

            <div className="flex justify-between">
            <div className="flex gap-4">
              <p><ThumbUpAltOutlinedIcon/> 200</p>
              <p>< CommentOutlinedIcon/> 40</p>
            </div>
             <p><RemoveRedEyeOutlinedIcon/> 300</p>
             </div>
             </div>
        </div>
      </div>

    
      <div className="w-1/4">
       
      </div>
    </div>
  );
}
