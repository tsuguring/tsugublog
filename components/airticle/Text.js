export const Text = ({ key, text }) => (
  <div
    dangerouslySetInnerHTML={{ __html: `${text}` }}
    className="text-medium sm:text-lg py-2 font-medium tracking-wide leading-6 sm:tracking-wide md:leading-7 xl:leading-9 text-gray-900 dark:text-gray-100"
  ></div>
);
