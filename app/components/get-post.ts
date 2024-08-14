// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app/posts");

export function getSortedPostsData() {
  // /posts 디렉토리에서 파일 이름 가져오기
  const fileNames = fs.readdirSync(postsDirectory);

  console.log(fileNames);
  const allPostsData = fileNames.map((fileName) => {
    // 파일 이름에서 ".md" 제거하여 id로 사용
    const id = fileName.replace(/\.md$/, "");

    // 마크다운 파일을 문자열로 읽기
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // gray-matter를 사용하여 메타데이터 섹션 파싱
    const matterResult = matter(fileContents);

    // 데이터를 id와 함께 결합
    return {
      id,
      content: matterResult.content,
      ...(matterResult.data as { date: string; title: string; tags: string[] }),
    };
  });
  // 날짜별로 정렬
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostData(id: string) {
  // /posts 디렉토리에서 파일 이름 가져오기
  const file = fs.readFileSync(path.join(postsDirectory, `${id}.md`), "utf8");
  const matterResult = matter(file);
  return {
    id,
    content: matterResult.content,
    ...(matterResult.data as { date: string; title: string; tags: string[] }),
  };
}
