export default function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container sm:px-16 px-7 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <p>&#169; 2023 Schenck & Hansen KG</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <ul className="flex">
              <li>
                <a href="https://schenck-hansen.de/impressum">Impressum</a>
              </li>
              <li className="pl-8">
                <a href="https://schenck-hansen.de/datenschutz">Datenschutz</a>
              </li>
            </ul>
          </span>
        </div>
      </footer>
    </>
  );
}
