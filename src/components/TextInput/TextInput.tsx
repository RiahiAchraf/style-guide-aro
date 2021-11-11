import React, { ChangeEventHandler, FC, InputHTMLAttributes } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

import { redClass, blueClass } from "./styled";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
  errorMessage?: string;
  optional?: boolean;
  /* Useful when input is controlled by another element */
  readonly?: boolean;
  [key: string]: any;
}

const TextInput:FC<TextInputProps> = (props) => {
  const {
    name,
    label,
    value,
    onChange,
    placeholder,
    readonly = false,
    error = false,
    errorMessage,
    optional = false,
    ...rest
  } = props;

  return (
    <div>
      <div className="flex justify-between">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        {optional && (
          <span className="text-sm text-gray-500" id="email-optional">
            Optional
          </span>
        )}
      </div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          className={error ? redClass : blueClass}
          type={rest.type || 'text'}
          name={name}
          id={name}
          value={value} 
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readonly}
          {...rest}
        />
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {/* heroicones package : npm i @heroicons/react */}
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {errorMessage}
        </p>
      )}
    </div>
  )
}

export default TextInput;








// import React, { HTMLAttributes, ChangeEventHandler } from "react";
// import { ExclamationCircleIcon } from "@heroicons/react/solid";

// import { redClass, blueClass } from "./styled";

// export interface TextInputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'size' | 'disabled' | 'onChange' > {
//   name?: string;
//   label: string;
//   value?: string;
//   onChange?: ChangeEventHandler<HTMLInputElement>;
//   error?: boolean;
//   errorMessage?: string;
//   optional?: boolean;
//   /* Useful when input is controlled by another element */
//   readonly?: boolean;
//   [key: string]: any;
// }

// const TextInput:React.ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (props, ref) => {
//   const {
//     name,
//     label,
//     value,
//     onChange,
//     placeholder,
//     readonly = false,
//     error = false,
//     errorMessage,
//     optional = false,
//     ...rest
//   } = props;

//   return (
//     <div>
//       <div className="flex justify-between">
//         <label
//           htmlFor={name}
//           className="block text-sm font-medium text-gray-700"
//         >
//           {label}
//         </label>
//         {optional && (
//           <span className="text-sm text-gray-500" id="email-optional">
//             Optional
//           </span>
//         )}
//       </div>
//       <div className="mt-1 relative rounded-md shadow-sm">
//         <input
//           className={error ? redClass : blueClass}
//           type={rest.type || 'text'}
//           name={name}
//           id={name}
//           value={value} 
//           onChange={onChange}
//           placeholder={placeholder}
//           readOnly={readonly}
//           ref={ref}
//           {...rest}
//         />
//         {error && (
//           <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//             {/* heroicones package : npm i @heroicons/react */}
//             <ExclamationCircleIcon
//               className="h-5 w-5 text-red-500"
//               aria-hidden="true"
//             />
//           </div>
//         )}
//       </div>
//       {error && (
//         <p className="mt-2 text-sm text-red-600" id="email-error">
//           {errorMessage}
//         </p>
//       )}
//     </div>
//   )
// }

// export default React.forwardRef<HTMLInputElement, TextInputProps>(TextInput);