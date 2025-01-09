'use client'

import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line  } from 'recharts';
import { Instagram, BarChart2, TrendingUp, Image, Film ,AlbumIcon, } from 'lucide-react';
import demoData from '../../../public/demo/data';

interface Post {
    media_type: string;
    likes: number;
    comments: number;
    account: string;
}

const Page = () => {
  const [posts, setPosts] = React.useState<Post[]>(demoData[0]);
  const [username, setUsername] = React.useState<string>('maisamayhoon');

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const username = params.get('username');
    const userPost  = demoData.find((subArray: Post[]) => subArray[0]?.account === username) || demoData[0];
    setPosts(userPost);
    setUsername(username || 'maisamayhoon');
    //console.log(userPost ,username);
  }, []);

  useEffect(() => {
    // Define the async function directly inside useEffect
    const fetchData = async () => {
      if (!username) return; // Prevent unnecessary API calls if username is empty
  
      try {
        const response = await fetch("/api/langflow", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ input_value:username }),
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
  
        const result = await response.json();
        console.log(result);
      } catch (error:any) {
        console.error("Failed to fetch data:", error.message);
      }
    };
  
    fetchData();
  }, [username]);
  
  const processData = () => {
    const mediaTypeStats: { [key: string]: { type: string; totalLikes: number; totalComments: number; count: number } } = {};
    
    posts.forEach(post => {
      if (!mediaTypeStats[post.media_type]) {
        mediaTypeStats[post.media_type] = {
          type: post.media_type,
          totalLikes: 0,
          totalComments: 0,
          count: 0
        };
      }
      
      mediaTypeStats[post.media_type].totalLikes += post.likes;
      mediaTypeStats[post.media_type].totalComments += post.comments;
      mediaTypeStats[post.media_type].count += 1;
    });

    return Object.entries(mediaTypeStats).map(([type, stats]) => ({
      type,
      avgLikes: Math.round(stats.totalLikes / stats.count),
      avgComments: Math.round(stats.totalComments / stats.count),
      count: stats.count,
      engagementRate: ((stats.totalLikes + stats.totalComments) / (stats.count * 100)).toFixed(2)
    }));
  };

  const processedData = processData();

  const getMediaTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'image':
        return <Image className="h-6 w-6" />;
      case 'reels':
        return <Film className="h-6 w-6" />;
      default:
        return <AlbumIcon className="h-6 w-6" />;
    }
  };

  return (
    <div className="min-h-screen w-full mx-auto p-8 space-y-8 text-black bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800">
      <CardHeader className="dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 transition-all duration-300 hover:shadow-2xl drop-shadow-xl">
        <CardTitle className="text-4xl font-bold text-center flex items-center justify-center gap-4">
          <Instagram className="h-12 w-12 text-orange-500" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
            {username}
          </span>
        </CardTitle>
        <CardDescription className="text-center text-xl mt-2">Comprehensive Performance Overview</CardDescription>
      </CardHeader>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {processedData.map((item) => (
          <Card key={item.type} className="overflow-hidden transition-all duration-300 hover:shadow-lg drop-shadow-xl">
            <CardHeader className="bg-gradient-to-r from-orange-200 to-orange-300 dark:from-orange-800 dark:to-orange-700">
              <CardTitle className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  {getMediaTypeIcon(item.type)}
                  {item.type}
                </span>
                <span className="text-orange-700 dark:text-orange-200 font-semibold">{item.count} posts</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="h-48 transition-all duration-300 ">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                    { name: 'Likes', value: item.avgLikes },
                    { name: 'Comments', value: item.avgComments }
                  ]}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#f97316" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Engagement Rate</span>
                  <span className="text-orange-500 font-bold">{item.engagementRate}%</span>
                </div>
                <Progress value={parseFloat(item.engagementRate)} className="h-3 bg-orange-100" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="transition-all duration-300 hover:shadow-lg drop-shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BarChart2 className="h-8 w-8 text-orange-500" />
              Engagement Analysis
            </CardTitle>
            <CardDescription className="text-lg">Comparison of likes and comments across post types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96 transition-all duration-300  ">
              <ChartContainer
                config={{
                  avgLikes: {
                    label: "Average Likes",
                    color: "hsl(var(--chart-1))",
                  },
                  avgComments: {
                    label: "Average Comments",
                    color: "hsl(var(--chart-2))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={processedData}>
                    <XAxis dataKey="type" />
                    <YAxis yAxisId="left" orientation="left" stroke="hsl(var(--chart-1))" />
                    <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--chart-2))" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar yAxisId="left" dataKey="avgLikes" fill="hsl(var(--chart-1))" />
                    <Bar yAxisId="right" dataKey="avgComments" fill="hsl(var(--chart-2))" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg drop-shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <TrendingUp className="h-8 w-8 text-orange-500" />
              Content Distribution & Trends
            </CardTitle>
            <CardDescription className="text-lg">Analysis across post types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96 transition-all duration-300 ">
              <ChartContainer
                config={{
                  avgLikes: {
                    label: "Average Likes",
                    color: "hsl(var(--chart-1))",
                  },
                  avgComments: {
                    label: "Average Comments",
                    color: "hsl(var(--chart-2))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={processedData}>
                    <XAxis dataKey="type" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="avgLikes" stroke="hsl(var(--chart-1))" strokeWidth={3} />
                    <Line type="monotone" dataKey="avgComments" stroke="hsl(var(--chart-2))" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="grid gap-6 mt-8">
              {processedData.map((item) => (
                <div key={item.type} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium flex items-center gap-2">
                      {getMediaTypeIcon(item.type)}
                      {item.type}
                    </span>
                    <span className="text-orange-500 font-semibold">
                      {((item.count / posts.length) * 100).toFixed(1)}% of content
                    </span>
                  </div>
                  <Progress 
                    value={(item.count / posts.length) * 100} 
                    className="h-3 bg-orange-100"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;

