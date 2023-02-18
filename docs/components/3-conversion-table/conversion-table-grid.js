import React from 'react';

export default function ConversionTableGrid() {
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
                <th scope="row">.row</th>
                <td>
                  <code className="font-bold text-pink">flex flex-wrap -mx-4</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.col</th>
                <td>
                  <code className="font-bold text-pink">flex-1</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.col-auto</th>
                <td>
                  <code className="font-bold text-pink">flex-initial</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.col-12</th>
                <td>
                  <code className="font-bold text-pink">w-full</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.col-11</th>
                <td>
                  <code className="font-bold text-pink">w-11/12</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.col-10</th>
                <td>
                  <code className="font-bold text-pink">w-10/12</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.col-9</th>
                <td>
                  <code className="font-bold text-pink">w-9/12</code>
                  <br />
                  <code className="font-bold text-pink">w-3/4</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.col-8</th>
                <td>
                  <code className="font-bold text-pink">w-8/12</code>
                  <br />
                  <code className="font-bold text-pink">w-4/6</code>
                  <br />
                  <code className="font-bold text-pink">w-2/3</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.col-7</th>
                <td>
                  <code className="font-bold text-pink">w-7/12</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.col-6</th>
                <td>
                  <code className="font-bold text-pink">w-6/12</code>
                  <br />
                  <code className="font-bold text-pink">w-3/6</code>
                  <br />
                  <code className="font-bold text-pink">w-2/4</code>
                  <br />
                  <code className="font-bold text-pink">w-1/2</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.col-5</th>
                <td>
                  <code className="font-bold text-pink">w-5/12</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.col-4</th>
                <td>
                  <code className="font-bold text-pink">w-4/12</code>
                  <br />
                  <code className="font-bold text-pink">w-2/6</code>
                  <br />
                  <code className="font-bold text-pink">w-1/3</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.col-3</th>
                <td>
                  <code className="font-bold text-pink">w-3/12</code>
                  <br />
                  <code className="font-bold text-pink">w-1/4</code>
                </td>
              </tr>
              <tr>
                <th scope="row">.col-1</th>
                <td>
                  <code className="font-bold text-pink">w-1/12</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </figcaption>
    </figure>
  );
}
