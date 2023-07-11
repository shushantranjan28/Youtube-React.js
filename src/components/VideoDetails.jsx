import React, { useEffect, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionVideoCard";

const VideoDetails = () => {
    const { id } = useParams();
    const { setLoading } = useContext(Context);

    // The fetchVideoDetails and fetchRelatedVideos functions are now wrapped in useCallback
    const fetchVideoDetails = useCallback(() => {
        setLoading(true);
        fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
            console.log(res);
            setLoading(false);
        });
    }, []);

    const fetchRelatedVideos = useCallback(() => {
        setLoading(true);
        fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
            console.log(res);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        document.getElementById("root").classList.add("custom-h");
        fetchVideoDetails();
        fetchRelatedVideos();
    }, []);

    return (
        <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
            <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
                <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
                    {/* Rest of the component code */}
                </div>
                <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
                    {/* Rest of the component code */}
                </div>
            </div>
        </div>
    );
};

export default VideoDetails;
