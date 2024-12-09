export const blogQuery = groq`*[ _type == "post" && slug.current == $slug][0]`
