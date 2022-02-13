import { GetServerSideProps } from "next";

const Posts = ({ posts }) => {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
        <div className="mt-6 w-full overflow-hidden rounded-lg bg-white px-16 py-20 lg:max-w-4xl">
          <div className="mb-4">
            <h1 className="font-serif text-3xl font-bold underline decoration-gray-400">
              {" "}
              Lista de posts
            </h1>
          </div>

          <div className="w-full rounded bg-white px-6 py-4 shadow-md ring-1 ring-gray-900/10">
            <div>
              {posts.map((post) => {
                return (
                  <div key={post.id}>
                    <div className="mb-4 flex items-center space-x-2">
                      <span className="text-xl text-gray-500">
                        #{post.id} | {post.author}
                      </span>
                      <span className="text-xs text-gray-500">
                        em {post.date}
                      </span>
                    </div>
                    <p className="mb-10 text-xl text-gray-700">
                      {post.comment}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = [
    {
      id: 1,
      author: "João",
      comment: "Nessa imersão trabalhei com Nest.js.",
      date: "10/02/2022",
    },
    {
      id: 2,
      author: "José",
      comment: "Next.js é bom demais!",
      date: "11/02/2022",
    },
    {
      id: 3,
      author: "Maria",
      comment: "Golang é top!",
      date: "12/02/2022",
    },
    {
      id: 4,
      author: "Joana",
      comment: "Docker e Kubernetes são demais!",
      date: "13/02/2022",
    },
  ];

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
