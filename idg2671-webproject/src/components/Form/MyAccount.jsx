import React from "react"

export default function MyAccount() {
    return (
        <section className="flex items-center justify-center min-h-screen">
            <dl>
                <h1 className="md:text-3xl text-left mb-6">
                    My Account
                </h1>
                <div className="flex-col pt-3 mb-6">
                    <dt className="mb-1 md:text-lg font-semibold text-left">Name</dt>
                    <dd className="text-lg text-left">Anosh</dd>
                </div>
                <div className="flex-col pt-3 mb-6">
                    <dt className="mb-1 md:text-lg font-semibold text-left">Email</dt>
                    <dd className="text-lg text-left">anoshc@stud.ntnu.no</dd>
                </div>
                <div className="flex-col pt-3 mb-6">
                    <dt className="mb-1 md:text-lg font-semibold text-left">Study</dt>
                    <dd className="text-lg text-left">Web development</dd>
                </div>
                <div className="flex-col pt-3">
                    <dt className="mb-1 md:text-lg font-semibold text-left">Department</dt>
                    <dd className="text-lg text-left">Ntnu</dd>
                </div>
            </dl>
        </section>
    )
}