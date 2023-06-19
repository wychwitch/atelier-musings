export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('/src/posts/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const post = await resolver()
      const previewRaw = post.default.render().html.replace(/<h\d>.*<\/h\d>\n/g, "").replace(/<p>(.*?)<\/p>/g, "$1").split(' ')      
      const { metadata } = await resolver()
      const postPath = path.replace(/\/src\/posts\/(.*?)\.md/, "/musings/$1")
      let preview = previewRaw.slice(0, 15).join(" ");
      if (previewRaw.length > 15) {
        preview += "[...]";
      }
      return {
        meta: metadata,
        path: postPath,
        Content: post.default.render(),
        Preview: preview 
      }
    })
  )

  return allPosts
}
