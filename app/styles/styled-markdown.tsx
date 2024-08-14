interface StyledMarkdownProps {
  children: React.ReactNode;
}

export default function StyledMarkdown({ children }: StyledMarkdownProps) {
  return (
    <div className="prose prose-sm w-full max-w-none text-gray-900 sm:prose lg:prose-lg xl:prose-xl prose-headings:font-bold prose-h2:mt-12 prose-h2:text-2xl first:prose-h2:mt-0 prose-h3:mt-8 prose-h3:text-xl first:prose-h3:mt-0 prose-h4:mt-6 prose-h4:text-lg first:prose-h4:mt-0 prose-p:overflow-x-auto prose-p:break-words prose-a:text-blue-600 hover:prose-a:bg-blue-600 hover:prose-a:text-white prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:bg-gray-50 prose-code:bg-gray-100 prose-code:text-gray-800 prose-pre:bg-gray-100 prose-li:mb-1 prose-table:border-collapse prose-th:border-b-2 prose-th:border-gray-300 prose-td:border-t prose-td:border-gray-200 prose-img:mx-auto prose-hr:border-gray-300 md:w-[600px] dark:text-gray-100 dark:prose-blockquote:bg-gray-800 dark:prose-code:bg-gray-800 dark:prose-pre:bg-gray-800 dark:prose-th:border-gray-700 dark:prose-td:border-gray-800 dark:prose-hr:border-gray-700">
      {children}
    </div>
  );
}
