{/*
const LEETCODE_API = "https://leetcode.com/graphql";

const query = `
query getUserProfileAndRatings($username: String!) {
  matchedUser(username: $username) {
    username
    profile {
      ranking
      reputation
      starRating
      userAvatar
      realName
    }
    submitStats {
      acSubmissionNum {
        difficulty
        count
        submissions
      }
    }
  }

  userContestRanking(username: $username) {
    attendedContestsCount
    rating
    globalRanking
    totalParticipants
    topPercentage
  }

  userContestRankingHistory(username: $username) {
    attended
    rating
    ranking
    trendDirection
    problemsSolved
    totalProblems
    contest {
      title
      startTime
    }
  }
}
`;

export const fetchLeetCodeData = async (username) => {
  try {
    const response = await fetch(LEETCODE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch LeetCode data");
    }

    const { data, errors } = await response.json();

    if (errors) {
      throw new Error(errors[0].message);
    }

    return data;
  } catch (err) {
    console.error("LeetCode API Error:", err);
    return null;
  }
}; */}


const BASE_URL = "https://alfa-leetcode-api.onrender.com";

const fetchLeetCodeData = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/${username}/profile`);

    if (!response.ok) {
      throw new Error("Failed to fetch LeetCode data");
    }

    return await response.json();
  } catch (error) {
    console.error("LeetCode API Error:", error);
    return null;
  }
};

const fetchLeetCodeContestData = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/${username}/contest`);

    if (!response.ok) {
      throw new Error("Failed to fetch LeetCode contest data");
    }

    return await response.json();
  } catch (error) {
    console.error("LeetCode Contest API Error:", error);
    return null;
  }
};

export { fetchLeetCodeContestData, fetchLeetCodeData };