import { PaletteMode, SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

type AuthSafeProps = SvgIconProps & { theme?: PaletteMode };

const AuthSafeIcon: FC<AuthSafeProps> = ({ theme, ...props }) => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
      >
        <defs>
          <clipPath id="clip1">
            <path d="M 2.875 0.742188 L 21.171875 0.742188 L 21.171875 23.222656 L 2.875 23.222656 Z M 2.875 0.742188 " />
          </clipPath>
          <clipPath id="clip2">
            <path d="M 7.238281 4.75 L 16.792969 4.75 L 16.792969 17.871094 L 7.238281 17.871094 Z M 7.238281 4.75 " />
          </clipPath>
        </defs>
        <g id="surface1">
          <g clipPath="url(#clip1)" clipRule="nonzero">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: !theme || theme === "dark" ? "#fff" : "#000",
                fillOpacity: 1,
              }}
              d="M 12.003906 0.738281 L 2.875 3.074219 L 2.875 11.039062 C 2.875 16.082031 6.789062 21.773438 12.003906 23.253906 C 14.613281 22.515625 16.898438 20.71875 18.523438 18.488281 C 20.144531 16.253906 21.128906 13.5625 21.128906 11.039062 L 21.128906 3.074219 Z M 20.175781 11.039062 C 20.175781 13.296875 19.292969 15.804688 17.75 17.925781 C 16.210938 20.039062 14.179688 21.566406 12.003906 22.253906 C 9.832031 21.570312 7.800781 20.039062 6.257812 17.921875 C 4.714844 15.804688 3.832031 13.296875 3.832031 11.039062 L 3.832031 3.8125 L 12.003906 1.722656 L 20.175781 3.8125 Z M 12.003906 2.882812 L 4.957031 4.6875 L 4.957031 11.039062 C 4.957031 13.066406 5.761719 15.332031 7.164062 17.257812 C 8.480469 19.066406 10.1875 20.40625 12.003906 21.070312 C 13.824219 20.40625 15.53125 19.066406 16.839844 17.261719 C 18.246094 15.332031 19.050781 13.066406 19.050781 11.039062 L 19.050781 4.6875 Z M 12.003906 2.882812 "
            />
          </g>
          <g clipPath="url(#clip2)" clipRule="nonzero">
            <path
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: !theme || theme === "dark" ? "#000" : "#fff",
                fillOpacity: 1,
              }}
              d="M 12.015625 4.75 C 10.03125 4.75 8.433594 6.34375 8.433594 8.328125 L 8.433594 9.949219 C 7.695312 10.789062 7.242188 11.890625 7.242188 13.101562 C 7.242188 15.734375 9.378906 17.871094 12.015625 17.871094 C 14.652344 17.871094 16.792969 15.734375 16.792969 13.101562 C 16.792969 11.890625 16.339844 10.789062 15.597656 9.949219 L 15.597656 8.328125 C 15.597656 6.34375 14 4.75 12.015625 4.75 Z M 12.015625 5.941406 C 13.375 5.941406 14.402344 6.96875 14.402344 8.328125 L 14.402344 8.972656 C 13.699219 8.566406 12.886719 8.328125 12.015625 8.328125 C 11.144531 8.328125 10.332031 8.566406 9.628906 8.972656 L 9.628906 8.328125 C 9.628906 6.96875 10.65625 5.941406 12.015625 5.941406 Z M 12.015625 11.308594 C 12.671875 11.308594 13.210938 11.847656 13.210938 12.503906 C 13.210938 12.941406 12.96875 13.320312 12.613281 13.53125 L 12.613281 15.484375 L 11.417969 15.484375 L 11.417969 13.53125 C 11.066406 13.320312 10.820312 12.941406 10.820312 12.503906 C 10.820312 11.847656 11.359375 11.308594 12.015625 11.308594 Z M 12.015625 11.308594 "
            />
          </g>
        </g>
      </svg>
    </SvgIcon>
  );
};

export default AuthSafeIcon;