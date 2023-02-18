import React from 'react';

export default function ConversionTableContainers() {
  return (
    <figure className="border-4 rounded">
      <figcaption className="p-4">
        <div className="table-responsive">
          <table className="table w-full">
            <thead>
              <tr>
                <th scope="col">Bootstrap Classes</th>
                <th scope="col">Tailwind Equivalent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">.container-fluid</th>
                <td>
                  <code className="font-bold text-pink">container mx-auto px-4 max-w-none</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.container</th>
                <td>
                  <code className="font-bold text-pink">container mx-auto px-4</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.container-sm</th>
                <td>
                  <code className="font-bold text-pink">sm:container mx-auto px-4</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.container-md</th>
                <td>
                  <code className="font-bold text-pink">md:container mx-auto px-4</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.container-lg</th>
                <td>
                  <code className="font-bold text-pink">lg:container mx-auto px-4</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.container-xl</th>
                <td>
                  <code className="font-bold text-pink">xl:container mx-auto px-4</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </figcaption>
    </figure>
  );
}
