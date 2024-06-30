interface AlertsProps {
  className: string;
  tipo: string; //warning, success, info
  mensaje: string;
}

const alertStyles: { [key: string]: string } = {
  warning: "text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800",
  success: "text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800",
  info: "text-yellow-800 border-t-4 border-yellow-300 bg-yellow-50 dark:text-yellow-300 dark:bg-gray-800 dark:border-yellow-800",
};

const AlertIcon = () => (
  <svg
    className="flex-shrink-0 w-4 h-4"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
  </svg>
);

export const Alerts = ({ className, tipo, mensaje }: AlertsProps) => {
  const alertClass = alertStyles[tipo] || "";
  return (
    <>
      {alertClass && (
        <div className={`${className} ${alertClass}`} role="alert">
          <AlertIcon />
          <div className="ms-3 text-sm font-medium">{mensaje}</div>
          <button
            type="button"
            className={`ms-auto -mx-1.5 -my-1.5 ${className} text-${tipo}-500 rounded-lg focus:ring-2 focus:ring-${tipo}-400 p-1.5 hover:bg-${tipo}-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-${tipo}-400 dark:hover:bg-gray-700`}
            aria-label="Close"
          >
            <span className="sr-only">Dismiss</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};