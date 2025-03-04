export default function Footer() {
	return (
		<div className="flex flex-col gap-4 bg-black px-6 py-12 text-white">
			<div className="flex flex-col gap-1">
				<h4 className="font-bold tracking-tight">
					HPTLC ASSOCIATION INDONESIA CHAPTER
				</h4>
				<p>
					National Association that is a part/chapter of the International HPTLC
					Association
				</p>
			</div>
			<div className="flex flex-col gap-1">
				<h4 className="font-bold tracking-tight">Email:</h4>
				<p>info@hptlc-indonesia.org</p>
			</div>
			<div className="flex flex-col gap-1">
				<h4 className="font-bold tracking-tight">Location:</h4>
				<p>
					Jl. Raden Saleh No. 45 I, Cikini, Jakarta Pusat, Indonesia - 10330
				</p>
				<p>Telp. +6221 3101825</p>
			</div>
			<div className="flex flex-col gap-1">
				<h4 className="font-bold tracking-tight">Sponsors:</h4>
				<p>AbadiNusa</p>
				<p>Darma Karya Makmur Sentosa</p>
			</div>
		</div>
	);
}
