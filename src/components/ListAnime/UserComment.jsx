import prisma from "@/libs/prisma";

const UserComment = async ({ anime_mal_id }) => {
  const comments = await prisma.comment
    .findMany({
      where: { anime_mal_id },
    })
    .withAccelerateInfo();

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      {comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className=" font-bold w-full bg-emerald-100 rounded-full text-lg p-4 "
          >
            <p>{comment.username} : </p>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserComment;
