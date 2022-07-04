const URI = `${process.env.NEXT_PUBLIC_URI_API}/posts`;

/**
 * Obtener todos los posts
 * @param {{
 *  limit?: number,
 *  page?: number,
 *  visibility?: boolean;
 * } | undefined} param0
 *
 * @example getPosts() // retorna la pagina qcon un limite de 10 posts
 * getPosts({limit: 5, page: 2, visibility: true}) // retorna la pagina 2 con un liminte de 5 posts y que son solo visibles
 *
 * @returns
 */
export const getPostList = ({ limit = 10, page = 1, visibility }) => {
  const uriGetAll = `${URI}?limit=${limit}&page=${page}&visibility=${visibility}`;

  return fetch(uriGetAll);
};

/**
 * Obtener un post por su ID
 * @param {string | number} idPost
 * @returns
 */
export const getPost = (idPost) => {
  return fetch(`${URI}/${idPost}`);
};
