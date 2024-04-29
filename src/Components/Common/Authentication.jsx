import React from 'react';

const getRole = localStorage.getItem('userDetails');

export default function Authentication({ hasContent, roles, children }) {
  const isRoleArray = JSON.parse(getRole)?.role
  const isRole = roles?.some((role) => isRoleArray.includes(role));
  console.log(isRole)
  if (!isRole) {
    return hasContent ? (
      <>
        {/* 404 */}
        <div className="flex items-center justify-center h-full">
          <div className="text-2xl font-bold text-gray-600">
            404 | Unauthorized
          </div>
        </div>
      </>
    ) : null;
  }

  return <>{children}</>;
}