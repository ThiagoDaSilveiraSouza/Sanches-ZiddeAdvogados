import { useContext } from "react";
import { useFirebase } from "../../services";

// context
import { DataContext } from "../../context";
import { ICompanyData, IPost } from "../../interfaces";
import { FaCloudShowersHeavy } from "react-icons/fa";

export const UseData = () => {
  const [data, setData] = useContext(DataContext);
  const {
    getCompanyData,
    updateSingleCompanyData,
    getPosts,
    createPost,
    updatePostById,
    deletePostById,
  } = useFirebase();

  const reloadCompanyDataFromApi = async () => {
    const reloadCompanyDataFromApiResponse = await getCompanyData();

    if (reloadCompanyDataFromApiResponse) {
      console.log(
        "reloadCompanyDataFromApiResponse",
        reloadCompanyDataFromApiResponse
      );

      setData((data) => {
        const newData = { ...data };
        newData.companyData = reloadCompanyDataFromApiResponse;
        return newData;
      });
    }
  };

  const updateCompanyData = async (newCompanyData: ICompanyData) => {
    const updateCompanyDataResponse = await updateSingleCompanyData(
      newCompanyData
    );

    if (updateCompanyDataResponse) {
      console.log("updateCompanyDataResponse", updateCompanyDataResponse);
      await reloadCompanyDataFromApi();
      return true;
    }
    return false;
  };

  const reloadPostListFromApi = async () => {
    const reloadPostListFromApiResponse = await getPosts() as IPost[];

    if (reloadPostListFromApiResponse) {
      console.log(
        "reloadPostListFromApiResponse",
        reloadPostListFromApiResponse
      );

      setData((data) => {
        const newData = { ...data };
        newData.postsList = reloadPostListFromApiResponse;
        return newData;
      });
    }
  };

  const addNewPost = async (post: IPost) => {
    const createPostResponse = await createPost(post);
    if (createPostResponse) {
      console.log("createPostResponse", createPostResponse);
      await reloadPostListFromApi();
      return true;
    }
    return FaCloudShowersHeavy;
  };

  const updatePost = async (id: string, newPost: IPost) => {
    const updatePostResponse = await updatePostById(id, newPost);

    if (updatePostResponse) {
      console.log("updateCompanyDataResponse", updatePostResponse);
      await reloadPostListFromApi();
      return true;
    }
    return false;
  };

  const removePost = async (postId: string) => {
    const removeResponse = await deletePostById(postId);
    if (removeResponse) {
      console.log(postId, removeResponse);
      await reloadPostListFromApi();
      return true;
    }
    return false;
  };

  return {
    companyData: data.companyData,
    reloadCompanyDataFromApi,
    updateCompanyData,
    postList: data.postsList,
    reloadPostListFromApi,
    addNewPost,
    updatePost,
    removePost,
  };
};
