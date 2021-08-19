export default function PageTitle({ children }) {
  return (
    <h1 className="text-2xl tracking-wide font-extrabold leading-9 tracking text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
      {children}
    </h1>
  );
}
