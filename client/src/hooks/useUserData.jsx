import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const useUserData = () => {
    const [userId, setUserId] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loadingData, setLoadingData] = useState(false);

    const fetchUserData = async (_id) => {
        setLoadingData(true);
        try {
            const { data } = await axios.get(`http://localhost:3001/api`, {
                params: {
                    _id,
                },
            });
            setUserData(data);
        } catch (error) {
            if (error?.response?.status === 400) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Error");
            }
        } finally {
            setLoadingData(false);
        }
    };

    const updateUserData = async (name, sectors) => {

        if (sectors?.length < 1) return toast.error("Please select at least one sector.")
        setLoadingData(true);
        try {
            const { data } = await axios.patch("http://localhost:3001/api", {
                _id: userId,
                name,
                sectors,
            });
            setUserData(data);
            toast.success("Successfully updated");
            setTimeout(() => {window.location.reload()}, 500)
        } catch (error) {
            if (error?.response?.status === 400) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Error");
            }
        } finally {
            setLoadingData(false);
        }
    };

    useEffect(() => {
        let localStorageUserId = localStorage.getItem("userId");
        if (localStorageUserId) {
            setUserId(localStorageUserId);
            fetchUserData(localStorageUserId);
        }
    }, []);

    return {
        updateUserData,
        fetchUserData,
        userData,
        setUserData,
        loadingData,
    };
};

export default useUserData;
